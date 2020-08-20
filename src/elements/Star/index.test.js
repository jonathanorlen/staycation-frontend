import React from 'react'
import {render} from "@testing-library/react"
import Star from './index'

test("Should have props [value, height, width, spacing]", () => {
     const height = 40, width = 40, spacing = 4, value = 3.3
     const {container} = render(<Star width={width} height={height} width={width} spacing={spacing} value={value} />)
     const starYellow = "div.star:no(.placeholder)"

     expect(container.querySelector("div.stars")).toBeInTheDocument()
     expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`width: ${width}px`))
     expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`))
     expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`margin-right: ${spacing}px`))
     expect(container.querySelector(starYellow)).toBeInTheDocument()
     expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`width: ${width}px`))
     expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`))
     expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`margin-right: ${spacing}px`))

})