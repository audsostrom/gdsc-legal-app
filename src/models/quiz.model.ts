export interface Quiz {
   __id: string;
   __sectionId: string; // related to what section this quiz is for
   hasPassed: string; // has the user passed this quiz before?
}