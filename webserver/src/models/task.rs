use diesel::prelude::*;
use serde::{Deserialize, Serialize};

use crate::models::project::Project;
use crate::models::user::User;
use crate::schema::tasks;


#[derive(
    Queryable, Selectable, Serialize, Deserialize, Debug, Associations, Identifiable, PartialEq,
)]
#[diesel(table_name = tasks)]
#[belongs_to(Project)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Task {
    pub id: i32,
    pub description: String,
    pub reward: i64,
    pub completed: bool,
    pub user_id: Option<i32>,
    pub project_id: i32,
    // pub progress:Progress,
    pub title:String
}
#[derive(Debug, Serialize, Deserialize, PartialEq)]
pub enum Progress {
    ToDo,
    InProgress,
    Completed,
}
pub struct TaskResponse {
    pub id: i32,
    pub description: String,
    pub reward: i64,
    pub completed: bool,
    pub user_id: Option<i32>,
    pub project_id: i32,
    title: String,
}

impl From<Task> for TaskResponse {
    fn from(task: Task) -> Self {
        Self {
            id: task.id,
            description: task.description,
            reward: task.reward,
            completed: task.completed,
            project_id: task.project_id,
            user_id: task.user_id,
            title:task.title
        }
    }
}

#[derive(Insertable, Debug)]
#[diesel(table_name = tasks)]
pub struct NewTask<'a> {
    pub description: &'a str,
    pub reward: i64,
    pub completed: bool,
    pub project_id: i32,
    pub user_id:Option<i32>,
    // pub progress: Progress,
    pub title: &'a str
}

impl Task {
    pub fn with_assignees(self, assignees: Vec<User>) -> TaskWithAssignees {
        TaskWithAssignees {
            task: self,
            assignees,
        }
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct TaskWithAssignees {
    pub task: Task,
    pub assignees: Vec<User>,
}
