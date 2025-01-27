 (function() {
            'use strict';

            angular.module('bookDirectory', [])
                .controller('BookController', [function() {
                    var vm = this;
                    vm.books = [
                        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', publicationYear: 1925, isbn: '978-3-16-148410-0' },
                        { title: '1984', author: 'George Orwell', genre: 'Dystopian', publicationYear: 1949, isbn: '978-3-16-148411-0' },
                        { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publicationYear: 1960, isbn: '978-3-16-148412-0' }
                    ];
                    vm.newBook = { title: '', author: '', genre: '', publicationYear: '', isbn: '' };
                    vm.editingIndex = -1; 

                    vm.addBook = function() {
                        if (vm.editingIndex === -1) {
                            vm.books.push(vm.newBook);
                        } else {
                          
                            vm.books[vm.editingIndex] = angular.copy(vm.newBook);
                            vm.editingIndex = -1; 
                        }
                        vm.newBook = { title: '', author: '', genre: '', publicationYear: '', isbn: '' };
                    };

                    vm.editBook = function(book) {
                        
                        vm.editingIndex = vm.books.indexOf(book);
                  
                        vm.newBook = angular.copy(book);
                    };

                    vm.removeBook = function(index) {
                        vm.books.splice(index, 1);
                    };
                }]);
        })();