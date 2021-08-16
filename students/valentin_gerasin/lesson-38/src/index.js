import Post from './Post'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack post title')

console.log('Post to string', post.toString());