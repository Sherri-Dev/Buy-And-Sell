import { lazy } from "react";
import React from 'react'

export const lazyLoad = (path,exportName) => {
  return lazy(() => {
    const promise = import(path);
    if (!exportName) {
        return Promise
    }else{
        promise.then(module => ({default:module[exportName]}))
    }
  })
}
