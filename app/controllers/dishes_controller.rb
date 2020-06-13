class DishesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_dish, only: [:update, :destroy]

  # GET /dishes
  def index
    @dishes = Dish.all

    render json: @dishes
  end

  # GET /dishes/1
  def show
    @dish = Dish.find(params[:id])

    render json: @dish, include: :recipes
  end

  # POST /dishes
  def create
    puts params
    @dish = Dish.new(dish_params)
    @dish.user = @current_user
    if @dish.save
      render json: @dish, status: :created, location: @dish
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dishes/1
  def update
    if @dish.update(dish_params)
      render json: @dish
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dishes/1
  def destroy
    @dish.destroy
  end

  def dish_to_recipe
    @dish = Dish.find(params[:dish_id])
    @recipe = Recipe.find(params[:id])

    @dish.recipes << @recipe

    render json: @dish, include: :recipes
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dish
      @dish = @current_user.dishes.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dish_params
      params.require(:dish).permit(:name, :image,)
    end
end
