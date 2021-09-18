class NotesController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        notes = Note.all
        render json: notes, status: :ok
    end
    def show
        note = Note.find_by!(id: params[:id])
        render json: note, status: :ok
    end
    def create
        note = @current_user.notes.create!(notes_params)
        render json: note, status: :created
    end

    private
    def notes_params
        params.permit(:title, :content, :category)
    end
end
