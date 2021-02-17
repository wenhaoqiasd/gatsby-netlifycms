import CMS from "netlify-cms-app"
import styles from '!css-loader!./cms.css';
CMS.registerPreviewStyle(styles.toString(), { raw: true });