import { http,HttpResponse } from 'msw'
import { kanbanDB, taskDB } from './data/rest'

const apiUrl = process.env.REACT_APP_API_URL;
export const reorderHandlers = [
    http.post(`api/kanbans/reorder`, async ({request}) => {
    const requestBody = await request.json();
    const { fromId, referenceId, type } = requestBody;
    await kanbanDB.reorder({ fromId, referenceId, type });
    return HttpResponse.json({});
  }),
  http.post(`${apiUrl}/tasks/reorder`, async ({request}) => {
    const requestBody = await request.json();
    const {
      type,
      fromId: fromTaskId,
      referenceId,
      fromKanbanId,
      toKanbanId,
    } = requestBody;
    if (fromKanbanId !== toKanbanId) {
      await taskDB.update(fromTaskId, { kanbanId: toKanbanId });
    }
    await taskDB.reorder({ type, fromId: fromTaskId, referenceId });
    return HttpResponse.json({});
  }),
];