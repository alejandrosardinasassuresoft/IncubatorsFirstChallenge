const request = require('supertest');
const { constants } = require('http2');
const app = require('../src/app');
const repository = require('../src/repositories/task.repository');

describe('Task API', () => {
  beforeEach(() => {
    repository.clear();
  });

  test('creates a task successfully', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        title: 'Study SDD',
        description: 'Review the challenge documents'
      });

    expect(response.status).toBe(constants.HTTP_STATUS_CREATED);
    expect(response.body.data.title).toBe('Study SDD');
    expect(response.body.data.completed).toBe(false);
    expect(response.body.status).toBe(constants.HTTP_STATUS_CREATED);
  });

  test('fails when creating a task without title', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        description: 'Missing title'
      });

    expect(response.status).toBe(constants.HTTP_STATUS_BAD_REQUEST);
    expect(response.body.data.code).toBe('VALIDATION_ERROR');
  });

  test('returns all tasks', async () => {
    await request(app).post('/tasks').send({ title: 'Task 1' });
    await request(app).post('/tasks').send({ title: 'Task 2' });

    const response = await request(app).get('/tasks');

    expect(response.status).toBe(constants.HTTP_STATUS_OK);
    expect(response.body.data).toHaveLength(2);
  });

  test('returns one task by id', async () => {
    const createResponse = await request(app)
      .post('/tasks')
      .send({ title: 'Read one task' });

    const response = await request(app).get(`/tasks/${createResponse.body.data.id}`);

    expect(response.status).toBe(constants.HTTP_STATUS_OK);
    expect(response.body.data.id).toBe(createResponse.body.data.id);
  });

  test('updates a task', async () => {
    const createResponse = await request(app)
      .post('/tasks')
      .send({ title: 'Initial title' });

    const response = await request(app)
      .put(`/tasks/${createResponse.body.data.id}`)
      .send({ title: 'Updated title' });

    expect(response.status).toBe(constants.HTTP_STATUS_OK);
    expect(response.body.data.title).toBe('Updated title');
  });

  test('deletes a task', async () => {
    const createResponse = await request(app)
      .post('/tasks')
      .send({ title: 'Delete me' });

    const response = await request(app).delete(`/tasks/${createResponse.body.data.id}`);

    expect(response.status).toBe(constants.HTTP_STATUS_OK);
    expect(response.body.data.id).toBe(createResponse.body.data.id);
  });

  test('marks a task as completed', async () => {
    const createResponse = await request(app)
      .post('/tasks')
      .send({ title: 'Complete me' });

    const response = await request(app).patch(`/tasks/${createResponse.body.data.id}/complete`);

    expect(response.status).toBe(constants.HTTP_STATUS_OK);
    expect(response.body.data.completed).toBe(true);
    expect(response.body.data.completedAt).not.toBeNull();
  });

  test('returns 404 when task does not exist', async () => {
    const response = await request(app).get('/tasks/unknown-id');

    expect(response.status).toBe(constants.HTTP_STATUS_NOT_FOUND);
    expect(response.body.data.code).toBe('TASK_NOT_FOUND');
  });
});
