import React from 'react'

export default function Education() {
  return (
    <section className="space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-cyan-400">Education</h2>
      <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-500 transition">
        <h3 className="text-2xl font-bold text-cyan-300 mb-2">B.Tech in Data Science</h3>
        <p className="text-gray-400 mb-4">2023 – 2027</p>
        <p className="text-gray-300 mb-3">
          <strong>Andhra Loyola Institute of Engineering and Technology (ALIET)</strong>, Vijayawada
        </p>
        <p className="text-gray-400 mb-3">
          Affiliated to JNTUK. Focused on Artificial Intelligence, Machine Learning, Data Analytics and Python programming
          with emphasis on practical project-based learning.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-300"><strong>Focus Areas:</strong> AI, ML, Data Analytics, Python Programming</p>
        </div>
      </div>
    </section>
  )
}