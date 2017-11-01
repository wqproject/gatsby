const resolve = require(`resolve`)

const rootReact = resolve.sync(`react`, {
  basedir: process.cwd(),
  preserveSymlinks: true,
})
console.log(rootReact)
const React = require(rootReact)

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (React.version.slice(0, 2) !== `16`) {
    config._config.resolve.alias = {
      react: `gatsby-plugin-react-next/node_modules/react`,
      'react-dom': `gatsby-plugin-react-next/node_modules/react-dom`,
    }
  }

  return config
}
