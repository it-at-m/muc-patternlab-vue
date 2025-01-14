<p align="center">
    <img height="140" src="docs/images/muc-patternlab.png" />
</p>


<p align="center">
	<a href="https://github.com/it-at-m/muc-patternlab-vue/actions/workflows/build.yaml?query=branch%3Amain">
		<img 
            alt="Build Status"
            src="https://img.shields.io/github/actions/workflow/status/it-at-m/muc-patternlab-vue/build.yaml"
        >
	</a>
	<a href="https://www.npmjs.com/package/@muenchen/muc-patternlab-vue/">
		<img 
            alt="NPM Version"
            src="https://img.shields.io/npm/v/%40muenchen%2Fmuc-patternlab-vue"
        >
	</a>
	<a href="https://gitmoji.dev">
		<img 
            alt="Gitmoji"
            src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg"
        >
	</a>
	<a href="https://github.com/semantic-release/semantic-release">
		<img 
            alt="semantic-release: gitmoji"
            src="https://img.shields.io/badge/semantic--release-gitmoji-e10079?logo=semantic-release"
        >
	</a>
</p>

# muc-patternlab-vue

This repository contains a ready-to-use Vue-Components-Library based
on [munich.de's MDE5 Patternlab](https://patternlab.muenchen.space/). Current supported Version
is [1.0.4](https://patternlab.muenchen.space/?p=documentation-changelog).

In its current state only some components exist. The library will continually grow as the need for new components grows.

We intend to let this project be a community project in which every developer who needs new components contributes the
results of his work into this library.

## Roadmap

In the near future we plan to

- Create more components
- Integrate MDE5 Patternlab npm-Package as soon as it's available

See the [open issues](https://github.com/it-at-m/muc-patternlab-vue/issues) for a full list of proposed features (and
known issues).

## Usage

Please refer to the [usage guide](https://it-at-m.github.io/muc-patternlab-vue/?path=/docs/getting-started--docs/).

## Develop

### Setup

```shell
git clone https://github.com/it-at-m/muc-patternlab-vue.git
cd muc-patternlab-vue
npm install
npm run storybook
```

### Adding a new Component

1. Create a new Folder under `./src/components`-Directory
2. Create Vue-Component (with composition api) and index.ts-File which exports your component
3. Add your new Component to `./src/components/index.ts`
4. Create at least one story in storybook of your component by creating a `<MyComponent>.stories.ts`-File.

### Using MDE5 Patternlab-Icons

Patternlab-Icons are provided by a svg-Sprite which is automatically injected in this repos App.vue-File for local
testing. You can expect the users of this library to do the same thing.

So to use an icon from Patternlab you can simply follow the official
documentation: https://patternlab.muenchen.space/?p=viewall-guidelines-icons

```html
<muc-icon :icon="name"/>
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please open an issue with the tag "enhancement", fork the repo and
create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Open an issue with the tag "enhancement"
2. Fork the Project
3. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

More about this in the [CODE_OF_CONDUCT](/CODE_OF_CONDUCT.md) file.

### Release and Publish

This project uses [semantic-release](https://github.com/semantic-release/semantic-release)!

It follows [gitmoji commit conventions](https://gitmoji.dev/). For example:

| gitmoji                                        | Sample Commit message                                                                    | Release type  |
|------------------------------------------------|------------------------------------------------------------------------------------------|---------------|
| :lipstick: :lock: :ambulance: :bug: :arrow_up: | `:lipstick` / `:lock:` / `:ambulance:` / `:bug:` / `:arrow_up: some cool commit message` | Patch Release |
| :sparkles:                                     | `:sparkles: some new feature added`                                                      | Minor Release |
| :boom:                                         | `:boom: some breaking change happened.`<br>` Here is how to fix it: `                    | Major Release |

## License

Distributed under the MIT License. See [LICENSE](LICENSE) file for more information.

## Contact

it@M - opensource@muenchen.de
