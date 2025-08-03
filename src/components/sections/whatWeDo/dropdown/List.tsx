import styles from './styles/list.module.scss';
import WhatWeDoDropdownItem from './Item';
import { WHAT_WE_DO_DROPDOWN } from './dropdown.config';

export default function WhatWeDoDropdownList() {
  return (
    <div className={styles['dropdown-list']}>
      {WHAT_WE_DO_DROPDOWN &&
        Object.keys(WHAT_WE_DO_DROPDOWN).map((key) => (
          <WhatWeDoDropdownItem
            key={key}
            name={key}
            content={WHAT_WE_DO_DROPDOWN[key]}
          />
        ))}
    </div>
  );
}
