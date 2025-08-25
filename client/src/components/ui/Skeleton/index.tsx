import s from './styles.module.scss';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

export const Skeleton = ({ width, height, borderRadius }: SkeletonProps) => (
  <div
    style={{ width: width, height: height, borderRadius: borderRadius }}
    className={s.main}
  />
);
