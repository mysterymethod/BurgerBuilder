import React from 'react';

import classes from '/BurgerIngredient.module.css';

const burgerIngredients = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'): 
            ingredient = <div className = {classes.breadBottom}> </div>;
                break;

        case ('bread-top') :
            ingredient = (
                <div className = {classes.breadTop}> 
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>;
            );
                break;
        
        case ('cheese'):
            ingredient = <div className = {classes.Cheese}></div>;
                break;
        
        case ('salad'):
            ingredient = <div className = {classes.Salad}></div>;
                break;

        case ('bacon'):
            ingredient = <div className = {classes.Bacon}></div>;
                break;

        default: ingredient = null;
                        
    }

    return ingredient;
};

export default burgerIngredients;