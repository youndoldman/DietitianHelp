class Lab < ActiveRecord::Base
	belongs_to :client

	RANGES_FOR = {
		alb: {
			normal_adults: { 
				male: [35..50],
				female: [35..50]
				},
			metric: 'g/L'
		},
		bun: {
			normal_adults: {
				female: [8..21],
				male: [8..21]
				},
			metric: 'mg/dL'
		},
		creat: {
			normal_adults: {
				female: [0..1.3],
				male: [0..1.3]
				},
			metric: 'mg/dL'
		},
		chol: {
			normal_adults: {
				female: [3..5.5],
				male: [3..5.5]
				},
			metric: 'mmol/L'			
		},
		glu: {
			normal_adults: {
				female: [65..110],
				male: [65..110]
				},
			metric: 'mg/dL'		
		},
		hct: {
			normal_adults: {
				female: [40..52],
				male: [40..52]
				},
			metric: '%'	
		},
		hgb: {
			normal_adults: {
				female: [13..17],
				male: [13..17]
			},
			metric: 'g/dL'
		},
		iron: {
			normal_adults: {
				female: [65..180],
				male: [30..170]
			},
			metric: 'µg/dL'
		},
		k: {
			normal_adults: {
				female: [3.5..5],
				male: [3.5..5] 
			},
			metric: 'mmol/L'
		},
		na: {
			normal_adults: {
				female: [135..145],
				male: [135..145]
			},
			metric: 'mmol/L'
		},
		tprotein: {
			normal_adults: {
				female: [60..80],
				male: [60..80]
			},
			metric: 'g/L'
		},
		tlymph: {
			normal_adults: {
				female: [4..10],
				male: [4..10],
			},
			metric: '10^9/L'
		},
		tsh: {
			normal_adults: {
				female: [0.5..5],
				male: [0.5..5]
			},
			metric: 'mIU/L'
		},
		gfr: {
			normal_adults: {
				female: [90..120],
				male: [90..120],
			},
			metric: 'mL/min/1.73 m2'
		},
		a1c: {
			normal_adults: {
				female: [0..5.7],
				male: [0..5.7],
			},
			metric: '%'
		}
	}

	def self.ranges
		RANGES_FOR
	end
end