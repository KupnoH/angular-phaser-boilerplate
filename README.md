# AngularPhaserBoilerplate

## What's it about?

I've been exploring Phaser.js and while reading ["Infinite Runner in Phaser 3 with TypeScript" by ourcade](https://ourcade.co/books/infinite-runner-phaser3/), which is free by the way, I noticed that current version of a server, mentioned in this book, isn't running. Lots of errors which I wasn't in mood to deal with.
Then I thought, hey, it should be possible to do it using Angular. So I did after reading a couple of articles. They inspired me, I tooks some crucial parts from them, but the architecture is my own.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Setup

From what I've learned main stuff happens when you run ```new Phaser.Game(config)```. I do it in `GameComponent`. Technically, you can do this directly in `AppComponent`, so feel free to move it as you wish. Or you might want to add some menu, pages or other stuff presenting your game and create cool SPA(Single Page Application).

So, back to `new Phaser.Game(config)`. I placed config in `app/game/utils/config.ts`, which I import in `GameComponent`.

It has an interesting option, that I found useful (which might be not, since it's the first version of this boilerplate). `config.scene` uses value of `gameScenes`, which is a constant, imported from `app/game/scenes/index.ts`. To make stuff more modular I decided to create scenes folder where I'll store all the scenes and an index file, that would import all the scenes and export them as array, which then be used by config. Let's see if it would pass the test of time...

### Folder structure

All game files stored in `app/game` folder.

|-- **app** <br>
|---- **game** - _Is the main directory containing all game related files_<br>
|----- **containers** - _Used for all Phaser.GameObjects.Container_<br>
|-------- **Container.ts** - _single Phaser.GameObjects.Container file_<br>
|----- **scenes** - _used for all Phaser.Scene_<br>
|-------- **Game.scene.ts** - _single scene file (Name.scene is optional, but IMHO it looks better)_<br>
|----- **sprites** - _used for all Phaser.Physics.Arcade.Sprite_<br>
|-------- **Sprite.ts** - _single Phaser.Physics.Arcade.Sprite_<br>
|----- **utils** - _helper utilities, like config, helpers.ts and maybe some services_<br>
|-------- **config.ts** <br>
|-------- **helpers.ts** <br>

As I mentioned before all of this is optional and you can do your own files and folders structure.

### What was changed
This is (I think) the most important part. How I make it work.

- First of all generate new Angular app using AngularCli:
`ng new angular-phaser-boilerplate`
- Then install [Phaser.js](https://phaser.io/) by running `npm install phaser`
- Then add phaser script located in `node_modules/phaser/dist/phaser.min.js` to `angular.json` file in `projects.build.scripts` section
- Then add `"allowSyntheticDefaultImports": true,` to `tsconfig.json` `CompilerOptions` section
- The last step is to add `global` variable, which Phaser's TypeScript typings require, to the `index.html` file:
```
<script>
  if (global === undefined) {
    var global = window;
  }
</script>
```
Now all set up and your game application can be started via `npm run start` command.

### Special usage
Well, actually I wasn't just exploring, I've been reading mentioned book ["Infinite Runner in Phaser 3 with TypeScript" by ourcade](https://ourcade.co/books/infinite-runner-phaser3/) and in project's github I found an [issue that asked about upgrade to Parcel 2](https://github.com/ourcade/infinite-runner-template-phaser3/issues/3). Later I'll try to update it and create a PR (I hope). But now I need to learn a bit about Phaser and need running server. Turned out that Angular satisfies my needs. And with a bit of a googling I found the necessary solution 

To use it to code along with the book put your configuration to `app/game/utils/config.ts` and keep in mind that structure here is a bit different (though you can adjust it at any time). Place all media files for background and actors to assets folder and don't forget about the path when writing something like `this.load.image('image-name', 'assets/images/path/to/your/image')`.

After doing all above you can start (or continue) reading from chapter **"Repeating Background"** (page 7)

### Thanks to 
[Tommy Leung](https://twitter.com/iamSuperTommy) for creating such a cool books, knowledge sharing and creating [video content](https://www.youtube.com/@supertommy).

[Ourcade](https://ourcade.co/) for making such community and sharing knowledge.

Braelyn Sullivan, whose [article](https://braelynnn.medium.com/using-phaser-in-an-angular-8-component-53644a2280e3) inspired me to do this.

[Phaser.io](https://phaser.io/) for existing :) <3

### About me
My name is Artyom Ilyin. I'm a web developer and I like games. I always wanted to make games, but I wasn't able to do so. At first, it was lack of skills, but now it's lack of time (I have full time job and a family) so finding Phaser was perfect to me, because now I can create games using techs I know. Hit me up on kupnoh25@gmail.com, at [telegram](https://t.me/itilin) and visit [my personal site](https://itilin.by).
