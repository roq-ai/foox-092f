interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage freelancer_profile', 'Manage worklog', 'Read job', 'Apply to job'],
  ownerAbilities: [
    'Manage hiring process',
    'Manage freelancer profiles',
    'Manage worklogs',
    'Manage company and job postings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8f708b56-b5eb-4d40-aca5-4e37a7022c54',
};
