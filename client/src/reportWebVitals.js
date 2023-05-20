const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;



// este código proporciona una manera conveniente de registrar y enviar los web vitals (una serie de métricas de rendimiento que miden la experiencia del usuario) de una aplicación a un servicio externo para su análisis. Al hacer un seguimiento de estos indicadores de rendimiento, los desarrolladores pueden identificar y solucionar problemas de rendimiento en sus aplicaciones web.