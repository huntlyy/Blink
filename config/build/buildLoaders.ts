import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import test from 'node:test';
export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }

      const babelLoader = {
          test: /\.(js|jsx|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
      }

      const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
          {
          loader: 'file-loader',
          }
        ]
      }

    const cssLoader = buildCssLoader(isDev);
    
    return [svgLoader, fileLoader, babelLoader, typescriptLoaders, cssLoader]
}