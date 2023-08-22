const router = require('express').Router()

const render = require('./controllers/render');

// Routes du site 

router.get('/', render.homePage);
router.get('/publications', render.publicationsPage);
router.get('/publication/:id', render.onePublicationPage);
router.get('/signin', render.signInPage);
router.get('/signup', render.signUpPage);
router.get('/signup/company', render.signUpCompanyPage);
router.get('/signup/employee', render.signUpEmployeePage);
router.get('/subscription', render.subscriptionPage);

// Routes admin

router.get('/admin', render.adminPage),
router.get('/admin/add/publication', render.addPublicationForm);
router.get('/admin/publications', render.adminPublicationsPage);
router.get('/admin/update/publication/:id', render.updatePublicationForm);
router.get('/admin/management/users', render.userManagementForm);

// Routes Entreprise

router.get('/company', render.companyPage);
router.get('/company/info', render.companyInfoForm);
router.get('/company/management/employee', render.employeeManagementPage);
router.get('/company/management/subscription', render.subscriptionManagementPage);
router.get('/company/readings', render.companyReadingsPage);

// Routes Employé

router.get('/employee', render.employeePage);
router.get('/employee/info', render.employeeInfoForm);
router.get('/employee/readings', render.employeeReadingsPage);

module.exports = router;