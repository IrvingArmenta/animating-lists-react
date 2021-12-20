import objIsEmpty from './objIsEmpty';

type BooleanWrap<T> = {
  [K in keyof T]?: boolean;
};

type ViewportData = BooleanWrap<{
  top: boolean;
  bottom: boolean;
  right: boolean;
  left: boolean;
}>;

type ViewportReturn =
  | 'bottom'
  | 'top'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right';

function isOutOfViewport(el: HTMLElement, padding = 0): ViewportReturn | false {
  const rect = el.getBoundingClientRect();
  const overflowData: ViewportData = {
    top: false,
    bottom: false,
    right: false,
    left: false
  };

  if (rect.top + padding >= 0) {
    delete overflowData.top;
  }
  if (
    rect.bottom + padding <=
    (window.innerHeight || document.documentElement.clientHeight)
  ) {
    delete overflowData.bottom;
  }
  if (rect.left + padding >= 0) {
    delete overflowData.left;
  }
  if (
    rect.right + padding <=
    (window.innerWidth || document.documentElement.clientWidth)
  ) {
    delete overflowData.right;
  }

  if (!objIsEmpty(overflowData)) {
    const results = Object.keys(overflowData)
      .map((k) => k)
      .join('-') as ViewportReturn;

    return results;
  }

  return false;
}

export default isOutOfViewport;
