declare module "gsap-trial/SplitText" {
    import { gsap } from "gsap";

    export class SplitText {
        constructor(
            target: gsap.DOMTarget,
            vars?: {
                type?: string;
                charsClass?: string;
                wordsClass?: string;
                linesClass?: string;
            }
        );

        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];

        revert(): void;
    }
}