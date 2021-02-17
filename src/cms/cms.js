import CMS from "netlify-cms-app"
import styles from '!css-loader!./style.css';
CMS.registerPreviewStyle(styles.toString(), { raw: true });