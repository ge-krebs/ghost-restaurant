var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex('menu').del();
        yield knex('menu').insert([
            {
                id: 1,
                item: 'Tropical Breeze',
                price: 5,
                description: 'Escape to a tropical paradise with our exotic and refreshing smoothie, a tantalizing fusion of juicy tropical fruits',
                image: '/images/1-tropical.png',
            },
            {
                id: 2,
                item: 'Strawberry Shorty',
                price: 6,
                description: 'Experience pure delight with every sip of our luscious strawberry smoothie.',
                image: '/images/2-strawberry.png',
            },
            {
                id: 3,
                item: 'Vit C Boosta',
                price: 4,
                description: 'The most refreshing and immune-boosting Vitamin C drink, packed with the goodness of natural citrus flavors.',
                image: '/images/3-orange.png',
            },
            {
                id: 4,
                item: 'Purple Goodness',
                price: 4,
                description: 'Indulge in the tantalizing blend of succulent grapes and rich blackcurrants with our vibrant and antioxidant-rich drink.',
                image: '/images/4-grape.png',
            },
            {
                id: 5,
                item: 'Banana Protein',
                price: 7,
                description: 'Our creamy and delicious banana protein smoothie, packed with essential nutrients and a boost of protein',
                image: '/images/5-banana.png',
            },
            {
                id: 6,
                item: 'Greens Smoothie',
                price: 9,
                description: 'A vibrant blend of nutrient-dense kale and refreshing fruits that will nourish your body',
                image: '/images/6-kale.png',
            },
        ]);
    });
};
