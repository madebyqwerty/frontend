export type Student = {
	name: string;
	id: string;
};

/* 
{
    "name": "John Doe",
    "userId": "7d6fd0c4-6b3d-46d9-9840-5e8874c9c646",
    "id": "f7cabd53-49e1-4c93-b59e-6035811b134d",
    "lesson": 2,
    "date": "2023-05-14"
  } */

export interface Absence {
	name: string;
	userId: string;
	id: string;
	lesson: number;
	date: string;
}
