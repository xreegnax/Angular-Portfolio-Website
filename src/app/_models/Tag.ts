export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'ForestGreen');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'darkblue');
    static readonly DEEPLEARNING = new Tag('Deep-Learning', 'darkgreen');
    static readonly ANDROID = new Tag('Android', 'crimson');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly NEURALNETWORK = new Tag('Neural Network', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'cadetblue');
    static readonly REACT = new Tag('React', 'chocolate');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key;
    }
}