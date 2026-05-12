export const kitchenData = {
    categories: [{ name: 'Брънч' }, { name: 'Основно' }, { name: 'Леко меню' }, {name: 'Premium Selection'}, {name: 'Поке Бол'}],
    details: {
        'Брънч': {
            description: 'Перфектният старт на деня',
            workingTime: '10:00 - 16:00',
            bannerImg: 'benedikt1.webp',
            products: [
                {
                    name: 'Яйца Бенедикт',
                    description: 'Поширани яйца, холандски сос, спанак, английски мъфин',
                    price: '9.70 eur.',
                    img: 'eggs1.webp'
                },
                {
                    name: 'Пухкави палачинки с рикота',
                    description: 'Палачинки с рикота, домашно сладко от боровинки, маскарпоне, филирани бадеми',
                    price: '8.57 eur.',
                    img: 'flufiePancaces1.webp'
                },
                {
                    name: 'Сьомга Тарт със Сметанов Мус',
                    description: 'Пушена сьомга върху филийка занаятчийски хляб с квас...',
                    price: '7.40 eur.',
                    img: 'salomonTart.webp'
                }
            ]
        },
        'Основно': {
            description: 'Вашето Гурме изживяване',
            workingTime: '11:00 - 23:00',
            bannerImg: 'main.webp',
            products: [
                {
                    name: 'Патешко магре с мед',
                    description: 'Сочно патешко филе, поднесено с пюре от тиква, карамелизирани моркови и сос от горски плодове.',
                    price: '12.25 eur.',
                    img: 'duckyBreast.webp'
                },
                {
                    name: 'Сьомга стейк "Аспержи"',
                    description: 'Филе от сьомга на грил, гарнирано с хрупкави аспержи, бейби картофи и лимонов сос с каперси.',
                    price: '14.45 eur.',
                    img: 'SalmonSteak.webp'
                },
                {
                    name: 'Рибай Стейк (Black Angus)',
                    description: 'Крехко говеждо месо с билково масло, печени кореноплодни зеленчуци и сос "Демиглас".',
                    price: '9.10 eur.',
                    img: 'RibeyeSteak.webp'
                },
                {
                    name: 'Ризото с диви гъби',
                    description: 'Микс от манатарки и пачи крак, пармезан, трюфел зехтин и свежа мащерка.',
                    price: '9.10 eur.',
                    img: 'Risotto.webp'
                },
                {
                    name: 'Свински ребра "BBQ"',
                    description: 'Бавно готвени ребра с домашен барбекю сос, поднесени с хрупкави сладки картофи.',
                    price: '10.25 eur.',
                    img: 'PorkRibs.webp'
                },
            ]
        },
        'Леко меню': {
            description: 'Свежест във всяка хапка.',
            workingTime: '10:00 - 16:00',
            bannerImg: 'salad.webp',
            products: [
                {
                    name: 'Свежа салата',
                    description: 'Микс зелени салати, чери домати, краставица, лимонов дресинг',
                    price: '6.97 eur.',
                    img: 'greenSalad.webp'
                },
                {
                    name: 'Салата Цезар',
                    description: 'Пилешко филе, айсберг, пармезан, лек цезар сос',
                    price: '6.76 eur.',
                    img: 'ceaserSalad.webp'
                },
                {
                    name: 'Авокадо тост',
                    description: 'Пълнозърнест хляб, авокадо, поширано яйце',
                    price: '5.64 eur.',
                    img: 'avocadoToast.webp'
                },
                {
                    name: 'Zucchini Noodles',
                    description: 'Тиквички, доматен сос, пармезан',
                    price: '5.50 eur.',
                    img: 'nuddles.webp'
                }
            ]
        },
        'Premium Selection': {
            description: 'Фокус върху качеството (Premium feel)',
            workingTime: '10:00 - 16:00',
            bannerImg: 'premium.webp',
            products: [
                {
                    name: 'Wagyu Beef Steak',
                    description: 'Японско wagyu, трюфел масло, морска сол',
                    price: '40.78 eur.',
                    img: 'wagyu.webp'
                },
                {
                    name: 'Tomahawk Steak (за 2-ма)',
                    description: '800г телешки стек, билково масло',
                    price: '45.79 eur.',
                    img: 'tomahawk.webp'
                },
                {
                    name: 'Filet Mignon',
                    description: 'Телешко бон филе, червен винен сос',
                    price: '25.99 eur.',
                    img: 'FiletMignon.webp'
                },
                {
                    name: 'Grilled Salmon Deluxe',
                    description: 'Сьомга, аспержи, лимонов сос',
                    price: '15.95 eur.',
                    img: 'GrilledSalmon.webp'
                },
                {
                    name: 'Seared Tuna Steak',
                    description: 'Туна, сусам, соев сос',
                    price: '16.86 eur.',
                    img: 'SearedTunaSteak.webp'
                },
                {
                    name: 'Garlic Butter Shrimp',
                    description: 'Скариди, чесън, бяло вино',
                    price: '14.45 eur.',
                    img: 'GarlicButterShrimp.webp'
                }
            ]
        },
        'Поке Бол': {
            description: 'Свеж и здравословен',
            workingTime: '10:00 - 16:00',
            bannerImg: 'poke.webp',
            products: [
                {
                    name: 'Classic Salmon',
                    description: 'Сурова или леко маринована сьомга, ориз, авокадо, едамаме, свежа краставица и сусам.',
                    price: '9.20 eur.',
                    img: 'classicSalmon.webp'
                },
                {
                    name: 'Spicy Tuna',
                    description: 'Риба тон на кубчета, уакаме, репички, маринован джинджифил, чипс от лук.',
                    price: '9.50 eur.',
                    img: 'spicyTuna.webp'
                },
                {
                    name: 'Teriyaki Chicken',
                    description: 'Запечено пилешко филе със сос Терияки, царевица, червено зеле, чери домати и пресен лук.',
                    price: '7.80 eur.',
                    img: 'teriyaki.webp'
                },
                {
                    name: 'Crispy Shrimp',
                    description: 'Панирани скариди, манго, авокадо, настърган морков и кориандър.',
                    price: '10.20 eur.',
                    img: 'crispyShrimp.webp'
                },
                {
                    name: 'Vegan Tofu',
                    description: 'Мариновано или запечено тофу, печен сладък картоф, боб Мунг, кейл и сушени червени боровинки или нар.',
                    price: '7.40 eur.',
                    img: 'veganTofu.webp'
                },
            ]
        },
    }
};

export const barData = {
    categories: [{ name: 'Топли напитки' }, { name: 'Безалкохолни напитки' }, {name: 'Алкохолни напитки'}, {name: 'Mocktails'}],
    details: {
        'Топли напитки': {
            description: 'Уют в чаша – от ароматно еспресо до авторски чайове за перфектен финал.',
            workingTime: '10:00 - 00:00',
            bannerImg: 'hotDrinks.webp',
            products: [
                { name: 'Еспресо Selection', description: '100% Арабика с наситен аромат и кадифен каймак', price: '2.50 eur.', img: 'espresso.webp' },
                { name: 'Капучино Класик', description: 'Пухкава млечна пяна и доза ароматно еспресо', price: '3.80 eur.', img: 'capuccino.webp' },
                { name: 'Флет Уайт', description: 'Двойно ристрето с копринено мляко за истински ценители', price: '4.20 eur.', img: 'flat_white.webp' },
                { name: 'Мурсалски чай', description: 'Традиционен планински чай с мед и лимон', price: '3.50 eur.', img: 'mursalski.webp' },
                { name: 'Горещ шоколад', description: 'Гъст белгийски шоколад с добавка от маршмелоу', price: '4.90 eur.', img: 'hot_choco.webp' }
            ]
        },
        'Безалкохолни напитки': {
            description: 'Свежест без компромиси – домашни лимонади и натурални вкусове.',
            workingTime: '12:00 - 00:00',
            bannerImg: 'wine-bg.webp',
            products: []
        },
        'Алкохолни напитки': {
            description: 'Изящна селекция от класически коктейли и премиум отлежали питиета.',
            workingTime: '12:00 - 00:00',
            bannerImg: 'wine-bg.webp',
            products: []
        },
        'Mocktails': {
            description: 'Целият блясък на коктейлите, но без капка алкохол. Наслада за сетивата.',
            workingTime: '12:00 - 00:00',
            bannerImg: 'wine-bg.webp',
            products: []
        },
    }
};