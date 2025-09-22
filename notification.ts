//src/services/notification.js

// import request from "../utils/api";


// // ====== READ ======
// export const getNotifications = () => request("get", "/posts?_limit=5");

// // ====== CREATE ======
// export const addNotificationApi = (data) => request("post", "/posts", data);

// // ====== UPDATE ======
// export const updateNotificationApi = (id, data) =>
//   request("patch", `/posts/${id}`, data);

// // ====== DELETE ======
// export const deleteNotificationApi = (id) =>
//   request("delete", `/posts/${id}`);












//src/services/notification.ts
import request from "../utils/api";
import { Notification } from "../types"; //  we use type 

// ====== READ ======
export const getNotifications = (): Promise<Notification[]> =>
  request("get", "/posts?_limit=5");

// ====== CREATE ======
export const addNotificationApi = (
  data: Omit<Notification, "id" | "createdAt">
): Promise<Notification> => request("post", "/posts", data);

// ====== UPDATE ======
export const updateNotificationApi = (
  id: number,
  data: Partial<Notification>
): Promise<Notification> => request("patch", `/posts/${id}`, data);

// ====== DELETE ======
export const deleteNotificationApi = (id: number): Promise<void> =>
  request("delete", `/posts/${id}`);
