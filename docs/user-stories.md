# User Stories

## US-001 Create task

As a user
I want to create a task
So that I can track thinks to do

### Acceptance Criteria

- Task title is required
- Task description is optional
- Task is created as incomplete by default
- System generates task id

### Scenario: Create a valid task

Given the user provides a valid title and description
When the task is created
Then the system should create the task
And mark it as incomplete

### Scenario: Create a invalid task without title

Given the user provides description but no a title
When the task tries to be created
Then the system return an error because title is required


### Scenario: Error while creating a task

Given the system produce an unexpected error when user provides a valid title
When the task tries to be created and is produced an unexpected error
Then the system should answer with detail of the error
And use the structure defined for answers

## US-002 Get list of tasks

As a user
I want to get a list of tasks
So that I can display tasks to do

### Acceptance Criteria

- Should return a list of all items.
- Pagination and sorting is out of scope.
- Should return a list of taks.
- Each task should include title and description if has.

### Scenario: Get list of tasks

Given the request of api call without parameters
When the tasks list is returned
Then the system should get the tasks list
And return in the structure defined for answers

### Scenario: Error while returning the tasks list

Given the request of api call without parameters
When the tasks list is returned
Then the system produceses an error while getting the tasks list
And return the error in the structure defined for answers

## US-003 Get one of tasks

As a user
I want to get a task
So that I can display an updated task to do

### Acceptance Criteria

- Should return a task with id provided.
- Should return tak all data.

### Scenario: Get task by id

Given the request of api call with id as parameter
When a task is returned
Then the system should get the task that match with the id received as parameter
And return in the structure defined for answers

### Scenario: Error while returning the task

Given the request of api call with id as parameter
When a task is returned
Then the system produceses an error while geting the task
And return the error in the structure defined for answers

## US-004 Update a task

As a user
I want to update a task
So that I can display the task to do updated

### Acceptance Criteria

- Should return the task updated.
- Each task should include title and description if it has.

### Scenario: Update a tasks by id

Given the request of api call with id query parameter, and the fields that will be updated
When a task is updated
Then the system should update the task that match with id using the data received in request body
And return in the structure defined for answers

### Scenario: Error while updating the task

Given the request of api call with id query parameter, and the fields that will be updated
When the tasks list updated
Then the system produceses an error while updating the task
And return the error in the structure defined for answers

## US-005 Delete a task

As a user
I want to delete a task
So that I can remove the task from list of tasks already saved

### Acceptance Criteria

- Should return the id if task deleted.
- Should validate if the task with id provided exists.

### Scenario: Delete a task by id

Given the request of api call with id query parameter
When a task is deleted
Then the system should delete the task that match with id
And return in the structure defined for answers

### Scenario: Error while deleting the task

Given the request of api call with id query parameter
When the tasks tries to be deleted
Then the system produceses an error while matching the id provided with a task recorded
And return the error in the structure defined for answers

## US-006 Mark as completed a task

As a user
I want to mark as completed a task
So that I can make sure I already did a task

### Acceptance Criteria

- Should return all task data if task updated.
- Should validate if the task with id provided exists.

### Scenario: Mark as done a task by id

Given the request of api call with id query parameter for mark as completed the task
When a task is marked as completed
Then the system should update the task that match with id
And return in the structure defined for answers

### Scenario: Error while deleting the task

Given the request of api call with id query parameter for mark as completed the task
When the tasks tries to be marked as completed
Then the system produceses an error while matching the id provided with a task recorded
And return the error in the structure defined for answers