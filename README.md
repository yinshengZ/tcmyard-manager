# TCMYard-Manager

 ###### -a clinic management system for tcmyard

This is a system written in Laravel and Vue (thanks to [Vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/) made by panjiachen)

Default front-end is at laravel.test/admin.

### Features:

1. Manage Patients
   * patients profile
   * patient treatments history
   * patient records
   * patient files such as *disease condition photos*, *receipts*, *medical scan images*

2. Inventory Managements
   * products managements 
   * stock managements 

3. Finance Managements
   * incomes managements
   * expenses managements
   * basic stats illustration with echarts

4. User Managements
   * user profile
   * user todo list
 
5. Planned
   * generate end of year accounts
   * generate patient receipts 
   * calendar  


# Installation

###### Prerequisites:
- PHP/MYSQL/Apache
- Composer 
- Node


```
# clone the project
git clone https://github.com/yinshengZ/tcmyard-manager.git

# install laravel dependencies
    composer install  
    composer update

# create a local .env file and set up accordingly

# generate application key 

    php artisan key:generate

# migration
    php artisan migrate

# install javascript node modules within the \resource\admin folder
    cd resource\admin
    npm install
    npm update

```