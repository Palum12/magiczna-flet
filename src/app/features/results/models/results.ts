export interface Results {
    id: string;
    fieldOfStudyProposals: Result[];
    expertDescription: string;
}

export interface Result {
    id: string;
    name: string;
    managingInstitution: string;
    level: string;
    launchProfessionalTitle: string;
    launchLanguageofEducation: string;
    disciplines: string[];
}