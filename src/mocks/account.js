import { http,HttpResponse } from 'msw'
import * as accountDB from './data/account'
import { bootstrap } from './bootstrap'
import { ServerError } from './utils'

const apiUrl = process.env.REACT_APP_API_URL;

const getToken = (req) =>
  req.headers.get("Authorization")?.replace("Bearer ", "");

export async function getUser(req) {
  const token = getToken(req);
  if (!token) {
    const error = new ServerError("A token must be provided");
    error.status = 401;
    throw error;
  }
  let userId;
  try {
    userId = atob(token);
  } catch (e) {
    const error = new ServerError("Invalid token. Please login again.");
    error.status = 401;
    throw error;
  }
  return await accountDB.read(+userId);
}

export const userHandlers = [
    http.get(`/api/me`, async ({request}) => {
    const requestBody = await request.json();
    const user = await getUser(requestBody);
    const token = getToken(requestBody);
    return HttpResponse.json({ user: { ...user, token } });
  }),
  http.post(`api/login`, async ({request}) => {
    const requestBody = await request.json();
    const { username, password } = requestBody;
    const user = await accountDB.authenticate({ name: username, password });
    return HttpResponse.json({user});
  }),

  http.post(`/api/register`, async ({request}) => {
    const requestBody = await request.json();
    const { username, password } = requestBody;
    const userFields = { name: username, password };
    await accountDB.create(userFields);
    let user;
    user = await accountDB.authenticate(userFields);
    bootstrap(user.id);
    return HttpResponse.json({ user });
  }),
];