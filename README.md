## Customize this file after creating the new REPO and remove this lines.

What to adjust:  
* Add the your project or repo name direct under the logo.
* Add a short and long desciption.
* Add links for your final repo to report a bug or request a feature.
* Add list of used technologies.
* If you have, add a roadmap or remove this section.
* Fill up the section for set up and documentation.
 * Start in this file only with documentation and link to the docs folder.
* Add project shields. Use [shields.io](https://shields.io/)

## ------- end to remove -------
<!-- add Project Logo, if existing -->

# muc-patternlab-vue

This repository contains a ready-to-use Vue-Components-Library based on munich.de's MDE5 Patternlab patternlab.muenchen.space

In it's current state only some components exist. The library will continuely grow as the need for new components grows.

We intend to let this project be a community project in which every developer who needs new components contributes the results of his work into this library.

### Built With

The documentation project is built with technologies we use in our projects:

* Vue 3
* MDE5 Patternlab

## Roadmap

In the near future we plan to

- Integrate Storybook.js to showcase components
- Create more components
- Integrate MDE5 Patternlab npm-Package as soon as it's available

See the [open issues](#) for a full list of proposed features (and known issues).

## Set up

```shell
git clone https://github.com/it-at-m/muc-patternlab-vue.git
cd muc-patternlab-vue
npm install
npm run dev
```

## Documentation

### Adding a new Component

1. Create a new Folder under `./src/components`-Directory
2. Create Vue-Component (with composition api) and index.ts-File which exports your component
3. Add your new Component to `./src/components/index.ts`

### Using MDE Patternlab-Icons

Patternlab-Icons are provided by a svg-Sprite which is automatically injected in this repos App.vue-File for local testing. You can expect the users of this library to do the same thing.

So to use an icon from Patternlab you can simply follow the official documentation: https://patternlab.muenchen.space/?p=viewall-guidelines-icons

```html
<svg aria-hidden="true" class="icon">
  <use xlink:href="#icon-{name}"></use>
</svg>
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please open an issue with the tag "enhancement", fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Open an issue with the tag "enhancement"
2. Fork the Project
3. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

More about this in the [CODE_OF_CONDUCT](/CODE_OF_CONDUCT.md) file.


## License

Distributed under the MIT License. See [LICENSE](LICENSE) file for more information.


## Contact

it@M - opensource@muenchen.de
