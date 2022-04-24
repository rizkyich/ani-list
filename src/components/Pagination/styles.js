export const pagination = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem 0'
};

export const paginationContainer = {
  display: 'flex',
  listStyleType: 'none'
};

export const paginationItem = {
  padding: '0 12px',
  height: '32px',
  textAlign: 'center',
  margin: 'auto 4px',
  color: 'rgba(0, 0, 0, 0.87)',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.01071em',
  borderRadius: '16px',
  lineHeight: '1.43',
  fontSize: '13px',
  minWidth: '28px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    cursor: 'pointer'
  }
};

export const dots = {
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'default'
  }
};
export const selected = {
  backgroundColor: 'rgba(0, 0, 0, 0.08)'
};

export const arrow = {
  '&::before': {
    position: 'relative',
    content: '" "',
    display: 'inline-block',
    width: '0.4em',
    height: '0.4em',
    borderRight: '0.12em solid rgba(0, 0, 0, 0.87)',
    borderTop: '0.12em solid rgba(0, 0, 0, 0.87)'
  }
};

export const arrowLeft = {
  transform: 'rotate(-135deg) translate(-50%)'
};

export const arrowRight = {
  transform: 'rotate(45deg)'
};

export const disabled = {
  pointerEvents: 'none',
  '&:hover': {
    cursor: 'default',
    brackgroundColor: 'transparent'
  }
};

export const disabledArrow = {
  '&::before': {
    borderRight: '0.12em solid rgba(0, 0, 0, 0.43)',
    borderTop: '0.12em solid rgba(0, 0, 0, 0.43)'
  }
};
