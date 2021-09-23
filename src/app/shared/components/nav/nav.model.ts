export class Nav {
    constructor(
        public id : number,
        public navItems : NavItem[]
        
    ) {}
}

export class NavItem {
    constructor(
        public id : number,
        public tag : string,
        public dropdown : string[]
    ) {}
}