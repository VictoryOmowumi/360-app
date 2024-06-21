import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
const PageSkeleton = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="h-full p-4 animate-pulse">
    <div className="flex w-full gap-4">

    <div className="h-10 bg-gray-200 mb-4 rounded-lg w-1/2"></div>
    <div className="h-10 bg-gray-200 mb-4 rounded-lg w-1/2"></div>
    </div>
    <div className="h-32 bg-gray-200 rounded-lg mb-8"></div>
    <div className="h-64 bg-gray-200 rounded-lg">
      <div className="mt-5 w-full">
        <div className="flex w-full justify-between">
          <div className="h-6 bg-gray-200 w-1/4 rounded"></div>
          <div className="h-6 bg-gray-200 w-1/4 rounded"></div>
        </div>
        <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            {Array(8).fill().map((_, i) => (
              <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
            ))}
          </tr>
        </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {Array(8).fill().map((_, i) => (
            <tr key={i}>
              {Array(8).fill().map((_, j) => (
                <td key={j} className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default PageSkeleton