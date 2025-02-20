import styles from './Post.module.css';

import PostComments from '../PostComments';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post: React.FC<Props> = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;