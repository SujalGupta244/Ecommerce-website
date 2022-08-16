import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, push, update, onValue, off, remove} from "firebase/database";

export class User{

    constructor(){
        const appConfig = {
            apiKey: "AIzaSyDIllNan0ELpn_oFjY30pKP3IYVyo9Xlds",
            authDomain: "ecommerce-website-40887.firebaseapp.com",
            databaseURL: "https://ecommerce-website-40887-default-rtdb.firebaseio.com",
            projectId: "ecommerce-website-40887",
            storageBucket: "ecommerce-website-40887.appspot.com",
            messagingSenderId: "421238770660",
            appId: "1:421238770660:web:fd39307a09e439cf96d5f1",
            measurementId: "G-RQNJEK7Z67"
        };
        this.app = initializeApp(appConfig);
        this.db = getDatabase(this.app);
        this.user_table = "user/";
        this.user_properties = [
            'first_name',
            'last_name',
            'address',
            'city',
            'country',
            'contact_no',
            'email',
            'password'
        ]
    };

    async add_user(user_id, properties){
        /*
        Checking whether all properties are present
        */
        this.user_properties.forEach((property)=>{
            if(!properties.hasOwnProperty(property)){
                throw Error("Missing Property: " + property)
            }
        });

        /*
        Adding user to the database
        */
        const new_user_reference = ref(this.db, this.user_table + user_id);
        await set(
            new_user_reference, properties
        );
    }

    async update_user(user_id, properties){
        
        /*
        Check whether argument contains valid properties
        */
       for(let property in Object.keys(properties)){
        let isValid = false;
        for(let valid_property in this.user_properties){
            if(property === valid_property){
                isValid = true; 
                break;
            }
        }
        if(!isValid){
            throw Error("Undefined Property: " + property);
        }
       }

        const user_reference = ref(this.db, this.user_table + user_id);
        await update(user_reference, properties);
    }

    async remove_user(user_id){
        const user_reference = ref(this.db, this.user_table + user_id)
        await remove(user_reference)
    }

    register_get_all_users_callback(callback){
        const all_users_reference = ref(this.db, this.user_table);
        onValue(all_users_reference, (snapshot)=>{
            
            callback(snapshot.toJSON());
        });
    }

    unregister_get_all_users_callback(){
        const all_users_reference = ref(this.db, this.user_table);
        off(all_users_reference);
    }
    
    register_get_user_callback(user_id, callback){
        const user_reference = ref(this.db, this.user_table + user_id)
        onValue(user_reference, (snapshot)=>{
            callback(snapshot.toJSON());
        });
    }

    unregister_get_user_callback(user_id){
        const user_reference = ref(this.db, this.user_table + user_id);
        off(user_reference);
    }
}




export class ProductCategory{
    constructor(){
        const appConfig = {
            apiKey: "AIzaSyDIllNan0ELpn_oFjY30pKP3IYVyo9Xlds",
            authDomain: "ecommerce-website-40887.firebaseapp.com",
            databaseURL: "https://ecommerce-website-40887-default-rtdb.firebaseio.com",
            projectId: "ecommerce-website-40887",
            storageBucket: "ecommerce-website-40887.appspot.com",
            messagingSenderId: "421238770660",
            appId: "1:421238770660:web:fd39307a09e439cf96d5f1",
            measurementId: "G-RQNJEK7Z67"
        };
        this.app = initializeApp(appConfig);
        this.db = getDatabase(this.app);
        this.product_category_table = "product_category/";
        this.product_category_properties = [
            'category_name'
        ];
    }

    async add_product_category(properties){
        
       this.product_category_properties.forEach((property)=>{
        if(!properties.hasOwnProperty(property)){
            throw Error("Missing Property: " + property)
        }
       });

       /*
       Product Category reference
       */
       const new_category_reference = ref(this.db, this.product_category_table);

       /*
       Adding categories to the database
       */
       await push(new_category_reference,properties);
    }

    
    async remove_product_category(product_category_id){
        const product_category_reference = ref(this.db, this.product_category + product_category_id);
        await remove(product_category_reference);
    }

    async update_product_category(product_category_id, properties){
        for(let property in Object.keys(properties)){
            let isValid = false;
            for(let valid_property in this.product_category_properties){
                if(valid_property === property){
                    isValid = true;
                    break;
                }
            }
            if(!isValid){
                throw Error("Undefined Property: " + property);
            }
        }

        const product_category_reference = ref(this.db, this.product_category_table + product_category_id);
        await update(product_category_reference, properties);
    }

    register_get_all_product_categories_callback(callback){
        const product_categories_reference = ref(this.db, this.product_category_table);
        onValue(product_categories_reference, (snapshot)=>{
            callback(snapshot.toJSON())
        });
    }

    unregister_get_all_product_categories_callback(){
        const product_category_reference = ref(this.db, this.product_category_table);
        off(product_category_reference);
    }

    register_get_product_category_callback(product_category_id, callback){
        const product_category_reference = ref(this.db, this.product_category_table + product_category_id);
        onValue(product_category_reference, (snapshot)=>{
            callback(snapshot.toJSON())
        });
    }

    unregister_get_product_category_callback(product_category_id){
        const product_category_reference = ref(this.db, this.product_category_table + product_category_id);
        off(product_category_reference);
    }

}


export class ProductItem{
    constructor(){
        const appConfig = {
            apiKey: "AIzaSyDIllNan0ELpn_oFjY30pKP3IYVyo9Xlds",
            authDomain: "ecommerce-website-40887.firebaseapp.com",
            databaseURL: "https://ecommerce-website-40887-default-rtdb.firebaseio.com",
            projectId: "ecommerce-website-40887",
            storageBucket: "ecommerce-website-40887.appspot.com",
            messagingSenderId: "421238770660",
            appId: "1:421238770660:web:fd39307a09e439cf96d5f1",
            measurementId: "G-RQNJEK7Z67"
        };
        this.app = initializeApp(appConfig);
        this.db = getDatabase(this.app);
        this.product_item_table = "product_item/";
        this.product_item_properties = [
            'category_id',
            'product_name',
            'rate',
            'unit',
            'opening_stock'
        ]
    }

    async add_product_item(properties){       

       this.product_item_properties.forEach((property)=>{
        if(!properties.hasOwnProperty(property)){
            throw Error("Missing Property: " + property)
        }
       });

       const product_item_reference = ref(this.db, this.product_item_table);

       await push(product_item_reference,properties);
    }

    async remove_product_item(product_item_id){
        const product_item_reference = ref(this.db, this.product_item_table + product_item_id);
        await remove(product_item_reference);
    }

    async update_product_item(product_item_id, properties){
        for(let property in properties){
            let isValid = false;
            for(let valid_property in this.product_item_properties){
                if(property === valid_property){
                    isValid = true;
                    break;
                }
            }
            if(!isValid){
                throw Error("Undefined Property: " + property);
            }
        }

        const product_item_reference = ref(this.db, this.product_item_table + product_item_id);
        await update(product_item_reference, properties);
    }


    register_get_all_product_items_callback(callback){
        const product_items_reference = ref(this.db , this.product_item_table);
        onValue(product_items_reference, (snapshot)=>{
            callback(snapshot.toJSON());
        });
    }

    unregister_get_all_product_items_callback(){
        const product_items_reference = ref(this.db , this.product_item_table);
        off(product_items_reference);
    }

    register_get_product_item_callback(product_item_id, callback){
        const product_item_reference = ref(this.db, this.product_item_table + product_item_id);
        onValue(product_item_reference, (snapshot)=>{
            callback(snapshot.toJSON());
        });
    }

    unregister_get_product_item_callback(product_item_id){
        const product_item_reference = ref(this.db, this.product_item_table + product_item_id);
        off(product_item_reference);
    }

}

export class ProductTransaction{
    constructor(){
        const appConfig = {
            apiKey: "AIzaSyDIllNan0ELpn_oFjY30pKP3IYVyo9Xlds",
            authDomain: "ecommerce-website-40887.firebaseapp.com",
            databaseURL: "https://ecommerce-website-40887-default-rtdb.firebaseio.com",
            projectId: "ecommerce-website-40887",
            storageBucket: "ecommerce-website-40887.appspot.com",
            messagingSenderId: "421238770660",
            appId: "1:421238770660:web:fd39307a09e439cf96d5f1",
            measurementId: "G-RQNJEK7Z67"
        };
        this.app = initializeApp(appConfig);
        this.db = getDatabase(this.app);
        this.product_transaction_table = "product_transaction/";
        this.product_transaction_properties = [
            'invoice_no',
            'user_id',
            'product_id',
            'transaction_date',
            'qty',
            'amount',
            'discount',
            'net_amount',
            'trans_mode'
        ]
    }

    async add_product_transaction(properties){
        this.product_transaction_properties.forEach((property)=>{
            if(!properties.hasOwnProperty(property)){
                throw Error("Missing Property: " + property);
            }
        });

        const product_transaction_reference = ref(this.db, this.product_transaction_table);
        await push(product_transaction_reference);
    }

    async remove_product_transaction(product_transaction_id){
        const product_transaction_reference = ref(this.db, this.product_transaction_table + product_transaction_id);
        await remove(product_transaction_reference);
    }

    async update_product_transaction(product_transaction_id, properties){

        for(let property in Object.keys(properties)){
            let isValid = false;
            for(let valid_property in this.product_transaction_properties){
                if(property === valid_property){
                    isValid = true;
                    break;
                }
            }
            if(!isValid){
                throw Error("Undefined Property " +  property);
            }
        }
        const product_transaction_reference = ref(this.db, this.product_transaction_table + product_transaction_id);
        await update(product_transaction_reference);
    }

    register_get_all_product_transactions_callback(callback){
        const product_transaction_reference = ref(this.db, this.product_transaction_table);
        onValue(product_transaction_reference, (snapshot)=>{
            callback(snapshot.toJSON());
        })
    }

    unregister_get_all_product_transactions_callback(){
        const product_transaction_reference = ref(this.db, this.product_transaction_table);
        off(product_transaction_reference);
    }

    register_get_product_transaction_callback(product_transaction_id,callback){
        const product_transaction_reference = ref(this.db, this.product_transaction_table + product_transaction_id);
        onValue(product_transaction_reference, (snapshot)=>{
            callback(snapshot.toJSON());
        })
    }

    unregister_get_product_transaction_callback(product_transaction_id){
        const product_transaction_reference = ref(this.db, this.product_transaction_table + product_transaction_id);
        off(product_transaction_reference);
    }
}

