class LabsController < ApplicationController
  skip_before_action :client_loaded_same_as_params?, only: [:show, :index]

	def create
		@lab = Lab.new(lab_params)

		if @lab.save
			render :js => "loadClient(" + @lab.id.to_s + ");", content_type: 'text/html'
		else
			render :js => "loadClient(" + @lab.id.to_s + ");", content_type: 'text/html'
		end
	end

	private

	def lab_params
		params.require(:lab).permit(:alb, :bun, :creat, :chol, :glu, :hct, :hgb, :iron, :k, :na, :tprotein, :tlymph, :tsh, :gfr, :a1c, :client_id, :date)
	end
	
end