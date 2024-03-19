import { HeroImageBackground } from "../components/HeroImageBackground/HeroImageBackground";
import { SimpleHeader } from "../components/SimpleHeader/SimpleHeader";

export function HomePage() {
    return <div>
        <SimpleHeader></SimpleHeader>
        <HeroImageBackground></HeroImageBackground>
        <HeroImageBackground></HeroImageBackground>
    </div>;
}