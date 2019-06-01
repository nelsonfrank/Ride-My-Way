export async function getAllRides(request, response) {
  try {
    const rides = [];

    return response.status(200).json(rides);
  } catch (error) {
    const { message } = error;

    return response.status(500).json({
      error,
      message
    });
  }
}

export async function createRide(request, response) {
  try {
    const rides = [];

    rides.concat(request.body);
    return response.status(201).json(rides);
  } catch (error) {
    const { message } = error;

    return response.status(500).json({
      error,
      message
    });
  }
}

export async function getSpecificRide(request, response) {
  try {
    return response.status(200).request.params;
  } catch (error) {
    const { message } = error;

    return response.status(500).json({
      error,
      message
    });
  }
}
