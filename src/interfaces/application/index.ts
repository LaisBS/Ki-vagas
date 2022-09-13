export interface IApplication {
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    valid: Date;
    userId: string;
    vacancyId: string;
  }

  export interface IApplicationRequest {
    userId: string;
    vacancyId: string;
  }