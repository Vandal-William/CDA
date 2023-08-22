const render = {

    homePage: (req, res) => {

        res.render('home');
    },

    publicationsPage: (req, res) =>  {

        res.render('publications');
    },

    onePublicationPage: (req, res) => {

        res.render('onePublication');
    },

    signInPage: (req, res) => {

        res.render('signIn');
    },

    signUpPage: (req, res) => {

        res.render('signUp');
    },

    signUpCompanyPage: (req, res) => {

        res.render('signUpCompany');
    },

    signUpEmployeePage: (req, res) => {

        res.render('signUpEmployee');
    },

    subscriptionPage: (req, res) => {

        res.render('subscription');
    },

    adminPage: (req, res) => {

        res.render('admin');
    },

    adminPublicationsPage: (req, res) => {

        res.render('adminPublications')
    },

    addPublicationForm: (req, res) => {

        res.render('addPublication');
    },

    updatePublicationForm: (req, res) => {

        res.render('updatePublication');
    },

    userManagementForm: (req, res) => {

        res.render('userManagement');
    },

    companyPage: (req, res) => {

        res.render('company');
    },

    companyInfoForm: (req, res) => {

        res.render('companyInfo');
    },

    employeeManagementPage: (req, res) => {

        res.render('employeeManagement');
    },

    subscriptionManagementPage: (req, res) => {

        res.render('subscriptionManagement');
    },

    companyReadingsPage: (req, res) => {

        res.render('companyReadings')
    },

    employeePage: (req, res) => {

        res.render('employee');
    },

    employeeInfoForm: (req, res) => {

        res.render('employeeInfo');
    },

    employeeReadingsPage: (req, res) => {

        res.render('employeeReadings');
    }

}

module.exports = render;