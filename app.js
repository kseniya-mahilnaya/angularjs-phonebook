import angular from 'angular';

import PhoneBookController from './app/controllers/PhoneBookController';
import PhoneBookService from './app/services/PhoneBookService';
import PhoneBookFilter from './app/filters/PhoneBookFilter';
import showPhoneNumbers from './app/directives/showPhoneNumbers';
import searchText from './app/directives/searchText';
import addNewContact from './app/directives/addNewContact';
import contacts from './app/directives/contacts';
import singleContact from './app/directives/singleContact';

import './app/styles/styles.scss';

angular.module('app', [require('angular-animate')])
    .controller('PhoneBookController', PhoneBookController)
    .service('PhoneBookService', PhoneBookService)
    .filter('PhoneBookFilter', PhoneBookFilter)
    .directive('showPhoneNumbers', showPhoneNumbers)
    .directive('searchText', searchText)
    .directive('addNewContact', addNewContact)
    .directive('contacts', contacts)
    .directive('singleContact', singleContact);



