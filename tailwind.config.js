/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    // 圆角
    borderRadius: {
      DEFAULT: '4px',
      none: '0'
    },
    // 阴影
    boxShadow: {
      DEFAULT: '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
      none: 'none'
    },
    // 字体序列
    fontFamily: {
      roboto: ['Roboto', 'arial', 'Tahoma']
    },
    // 字体大小
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'lg': '16px',
      '12': ['12px', {
        fontWeight: '400',
        lineHeight: '20px'
      }],
      '14': ['14px', {
        fontWeight: '400',
        lineHeight: '22px'
      }],
      '16': ['16px', {
        fontWeight: '500',
        lineHeight: '24px'
      }],
      '20': ['20px', {
        fontWeight: '500',
        lineHeight: '28px'
      }],
      '24': ['24px', {
        fontWeight: '500',
        lineHeight: '32px'
      }]
    },
    // 间距
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px'
    },
    extend: {
      // 背景色
      backgroundColor: {
        DEFAULT: '#f8f9fb'
      },
      // 边框
      borderColor: {
        DEFAULT: '#d9d9d9',
        default: '#d9d9d9',
        light: '#f0f0f0'
      },
      // 颜色
      colors: {
        primary: {
          DEFAULT: '#00c2ce'
        },
        success: {
          DEFAULT: '#0ec885'
        },
        warning: {
          DEFAULT: '#f1a716'
        },
        danger: {
          DEFAULT: '#ef5615'
        },
        info: {
          DEFAULT: '#abadaf'
        },
        help: {
          DEFAULT: '#999'
        }
      },
      // 透明度
      opacity: {
        '85': '0.85',
        '65': '0.65',
        '55': '0.55',
        '45': '0.45',
        '35': '0.35',
        '15': '0.15'
      }
    }
  },
  // 变体
  variants: {
  },
  // 禁用
  corePlugins: {
    // preflight: false // 默认配置
  },
  // 插件
  plugins: []
}

