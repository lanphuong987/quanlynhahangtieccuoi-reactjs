import React from 'react';
export default function CategoryCard(props) {
    return (
        <div class="card" id="catecard">
                <div class="face face1">
                    <div class="content">
                        <i class="fas fa-utensils"></i>
                    <h3>props.category.name</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                    <p>props.category.description</p>
                        <a href="#" type="button">Read More</a>
                    </div>
                </div>
            </div>
        )
}