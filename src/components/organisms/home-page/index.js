import React from "react";
import GreekSalad from '../../../assets/greek-salad.jpg'
import Bruschetta from '../../../assets/bruchetta.svg'
import LemonDesert from '../../../assets/lemon-dessert.jpg'
import HeroHeader from "../../molecules/hero-header";
import Specials from "../../molecules/specials";
import Testimonials from "../../molecules/testimonials";
import Chicago from "../../molecules/chicago";

function HomePage() {

    return (
        <>
            <HeroHeader 
                title={'Little Lemon'}
                subtitle={'Chicago'}
                content={'Do not miss out! Reserve your table now and enjoy a fresh, zesty dining experience — the perfect spot for good food, good vibes, and a little lemon twist!”'}
            />
            <Specials specials={[
                {
                    title: 'Greek Salad',
                    price: 11.50,
                    content: 'A refreshing mix of crisp cucumbers, juicy tomatoes, olives, and feta cheese, drizzled with olive oil and herbs — the classic Mediterranean Greek salad.',
                    image: GreekSalad
                },
                {
                    title: 'Bruschetta',
                    price: 8.55,
                    content: 'Toasted bread topped with ripe tomatoes, garlic, basil, and olive oil — a simple yet flavorful Italian appetizer bursting with freshness.',
                    image: Bruschetta
                },
                {
                    title: 'Lemon Desert',
                    price: 6.00,
                    content: 'A zesty lemon dessert with a light, refreshing flavor — tangy citrus balanced by a hint of sweetness, perfect for a delightful finish to any meal.',
                    image: LemonDesert
                },
                {
                    title: 'Greek Salad',
                    price: 11.50,
                    content: 'A refreshing mix of crisp cucumbers, juicy tomatoes, olives, and feta cheese, drizzled with olive oil and herbs — the classic Mediterranean Greek salad.',
                    image: GreekSalad
                },
                {
                    title: 'Greek Salad',
                    price: 11.50,
                    content: 'A refreshing mix of crisp cucumbers, juicy tomatoes, olives, and feta cheese, drizzled with olive oil and herbs — the classic Mediterranean Greek salad.',
                    image: GreekSalad
                },
            ]} />
            <Testimonials testimonials={[
                {
                    name: 'John Doe',
                    comment: 'Great Restaurant! with great prices and service.',
                    rating: 5
                },
                {
                    name: 'Jane Doe',
                    comment: 'The staff and food is to die for. We loved the whole dining experience.',
                    rating: 4
                },
                {
                    name: 'Tom Riddley',
                    comment: 'Food was freshly made and tasted delicious.',
                    rating: 4
                },
                {
                    name: 'Bob Stanley',
                    comment: 'Great Restaurant!',
                    rating: 5
                }
            ]} />
            <Chicago 
                title={'Little Lemon'}
                subtitle={'Chicago'}
                content={'Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.'}
            />
        </>
    );
}

export default HomePage;
