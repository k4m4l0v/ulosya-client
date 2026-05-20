import React from 'react';
import '../styles/aboutUs.css';

const AboutUs = () => {
    return (
        <section className="about_us" id="about_us">
            <h2 className="about_us__title">
                О нас
            </h2>
            <article className="about_us__description">
                Добро пожаловать в садовый центр «У Лося» <br/>Ярославское шоссе М-8 «Холмогоры», 
                61-й километр, вл. 2 <br/><br/>«У Лося» — здесь, вдали от суеты, бережно доращивают саженцы 
                с душой. Каждое дерево продаётся с закрытой корневой системой, что обеспечивает 
                высокую приживаемость и лёгкую адаптацию. Посадка возможна как весной, так и в 
                летне-осенний период. Цена зависит от сорта, доставка есть. Исходный материал 
                выращен в питомниках Подмосковья и Белоруссии — это гарантирует полное 
                соответствие климатическим условиям.
            </article>
            {/* <article className="about_us__work_templates">
                <h2 className="about_us__work_templates_title">
                    Примеры работ
                </h2>
                <div className="about_us__work_templates_images">
                    <ul className="about_us__work_templates_images_list">
                        <li>
                            <img src={null} alt="Пример работы" className="about_us__work_templates_images_list_item" />
                        </li>
                    </ul>
                </div>
            </article> */}
        </section>
    )
}

export default AboutUs;
