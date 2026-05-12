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
            bannerImg: 'soft_drinks.webp',
            products: [
                { name: 'Лимонада Бъз и Краставица', description: 'Домашен сироп от бъз, пресни краставици и газирана вода', price: '5.20 eur.', img: 'elderflower.webp' },
                { name: 'Фреш Микс', description: 'Прясно изцеден портокал, грейпфрут и щипка джинджифил', price: '5.80 eur.', img: 'fresh_mix.webp' },
                { name: 'Сан Пелегрино', description: 'Италианска газирана минерална вода (750мл)', price: '6.50 eur.', img: 'pellegrino.webp' },
                { name: 'Студен чай Матча', description: 'Японски зелен чай матча, лайм и органичен мед', price: '5.50 eur.', img: 'matcha_tea.webp' },
                { name: 'Тоник Роза', description: 'Премиум розов тоник с листенца от рози и канела', price: '4.80 eur.', img: 'rose_tonic.webp' }
            ]
        },
        'Алкохолни напитки': {
            description: 'Изящна селекция от класически коктейли и премиум отлежали питиета.',
            workingTime: '12:00 - 00:00',
            bannerImg: 'alcohol_drinks.webp',
            products: [
                { name: 'Negroni Sbagliato', description: 'Кампари, сладък вермут и пенливо вино Prosecco', price: '12.50 eur.', img: 'negroni.webp' },
                { name: 'Old Fashioned Reserve', description: '12-годишен бърбън, ангостура битер и кафява захар', price: '14.80 eur.', img: 'old_fashioned.webp' },
                { name: 'Espresso Martini', description: 'Водка, прясно еспресо и ликьор от печени кафени зърна', price: '13.00 eur.', img: 'espresso_martini.webp' },
                { name: 'Whiskey Sour', description: 'Уиски, пресен лимонов сок, захарен сироп и яйчен белтък', price: '11.50 eur.', img: 'whiskey_sour.webp' },
                { name: 'Aperol Spritz', description: 'Класически венециански аперитив с просеко и резен портокал', price: '10.50 eur.', img: 'aperol.webp' }
            ]
        },
        'Mocktails': {
            description: 'Целият блясък на коктейлите, но без капка алкохол. Наслада за сетивата.',
            workingTime: '12:00 - 00:00',
            bannerImg: 'mocktails.webp',
            products: [
                { name: 'Virgin Passion Fruit', description: 'Маракуя, ванилия, пресен лайм и тоник', price: '8.90 eur.', img: 'virgin_passion.webp' },
                { name: 'Apple & Ginger Fizz', description: 'Ябълков сок, домашен джинджифилов сироп и сода', price: '7.50 eur.', img: 'apple_fizz.webp' },
                { name: 'Cucumber Cooler', description: 'Краставица, мента, сок от лайм и щипка морска сол', price: '7.80 eur.', img: 'cucumber_cooler.webp' },
                { name: 'No-Jito Berry', description: 'Горски плодове, прясна мента, лайм и сода', price: '8.20 eur.', img: 'berry_nojito.webp' }
            ]
        },
    }
};

export const dessertData = {
    categories: [
        { name: 'Торти и Тартове' }, 
        { name: 'Сладоледени изкушения' }, 
        { name: 'Традиционни десерти' }, 
        { name: 'Здравословни сладки' }
    ],
    details: {
        'Торти и Тартове': {
            description: 'Ръчно приготвени шедьоври с фини кремове, белгийски шоколад и пресни плодове.',
            workingTime: '10:00 - 00:00',
            bannerImg: 'cakes_bg.webp',
            products: [
                { name: 'Шоколадово Суфле', description: 'С течен център от черен шоколад и топка ванилов сладолед', price: '7.80 eur.', img: 'souffle.webp' },
                { name: 'Лимонов Тарт', description: 'Хрупкаво маслено тесто с нежен лимонов крем и италиански меренг', price: '6.50 eur.', img: 'lemon_tart.webp' },
                { name: 'Червено Кадифе', description: 'Класическа торта с фин крем от маскарпоне и нежен пандишпан', price: '7.20 eur.', img: 'red_velvet.webp' },
                { name: 'Чийзкейк с Боровинки', description: 'Нюйоркски стил чийзкейк с домашно сладко от горски боровинки', price: '6.90 eur.', img: 'cheesecake.webp' }
            ]
        },
        'Сладоледени изкушения': {
            description: 'Домашно приготвено джелато и сорбета, поднесени с хрупкави добавки.',
            workingTime: '10:00 - 00:00',
            bannerImg: 'ice_cream_bg.webp',
            products: [
                { name: 'Джелато Микс', description: 'Три топки занаятчийски сладолед по Ваш избор', price: '5.50 eur.', img: 'gelato.webp' },
                { name: 'Сорбе от Манго', description: 'Освежаващо сорбе от зрели плодове манго и лайм', price: '4.80 eur.', img: 'mango_sorbet.webp' },
                { name: 'Афогато Класик', description: 'Ванилов сладолед, „удавен“ в горещо италианско еспресо', price: '5.20 eur.', img: 'affogato.webp' },
                { name: 'Сплит с Карамел', description: 'Сладолед солен карамел с хрупкави лешници и вафлена пура', price: '6.30 eur.', img: 'caramel_split.webp' }
            ]
        },
        'Традиционни десерти': {
            description: 'Познати вкусове, поднесени с модерен почерк и много любов.',
            workingTime: '10:00 - 00:00',
            bannerImg: 'traditional_bg.webp',
            products: [
                { name: 'Тирамису Еспресо', description: 'Бишкоти Савоярди, напоени със силно кафе и крем Маскарпоне', price: '7.50 eur.', img: 'tiramisu.webp' },
                { name: 'Крем Брюле', description: 'Класически френски десерт с истинска ванилия и хрупкава захарна коричка', price: '6.80 eur.', img: 'brulee.webp' },
                { name: 'Павлова с Ягоди', description: 'Ефирен целувчен блат със сметанов крем и пресни ягоди', price: '7.40 eur.', img: 'pavlova.webp' },
                { name: 'Брауни с Орехи', description: 'Топло шоколадово брауни с парченца орехи и карамелен сос', price: '6.20 eur.', img: 'brownie.webp' }
            ]
        },
        'Здравословни сладки': {
            description: 'Наслада без вина – десерти без рафинирана захар и глутен.',
            workingTime: '10:00 - 00:00',
            bannerImg: 'healthy_bg.webp',
            products: [
                { name: 'Суров Чийзкейк', description: 'Основа от фурми и ядки с крем от кашу и малини', price: '8.20 eur.', img: 'raw_cake.webp' },
                { name: 'Чиа Пудинг', description: 'С кокосово мляко, манго и филирани бадеми', price: '5.90 eur.', img: 'chia_pudding.webp' },
                { name: 'Шоколадово Авокадо', description: 'Мус от авокадо, сурово какао и кленов сироп', price: '6.50 eur.', img: 'avocado_mousse.webp' },
                { name: 'Плодова Салата Deluxe', description: 'Екзотични плодове с пресен босилек и ментов дресинг', price: '5.50 eur.', img: 'fruit_salad.webp' }
            ]
        }
    }
};