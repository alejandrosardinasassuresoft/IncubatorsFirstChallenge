# Data Model

## Task

| Field | Type | Required | Default value |
|--------|------|---------|---------------|
| id | uuid | yes | uuid generated |
| title | string | yes | empty string |
| description | string | no | empty string |
| completed | boolean | yes | false |
| createdAt | datetime | yes | date now |
| updatedAt | datetime | yes | same date as createdAt |
| completedAt | datetime | no | null |

## Error object

| Field | Type | Required |
|--------|------|---------|
| code | string | yes |
| details | string as description of the error | yes |

## Api Response model

| Field | Type | Required |
|--------|------|---------|
| data | Task or list of Tasks or or error object or null | yes |
| message | string as description of the response type | yes |
| status | number of the http status based on api response| yes |